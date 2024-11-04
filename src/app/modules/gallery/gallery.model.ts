import { Schema, model } from 'mongoose';
import {
  Gallery,
  GalleryModel,
  IFolder,
  IFolderModel,
} from './gallery.interface';
import httpStatus from 'http-status';
import { AppError } from '../../error/AppError';

// ImageGallery Schema
const ImageGallerySchema = new Schema<Gallery>({
  public_id: { type: String, required: true, unique: true },
  url: { type: String, required: true },
  folder: { type: Schema.Types.ObjectId, ref: 'Folder', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date },
});

ImageGallerySchema.statics.isImageExists = async function (
  public_id: string,
): Promise<boolean> {
  const count = await this.countDocuments({ public_id });
  return count > 0;
};

// Folder Schema
const FolderSchema = new Schema<IFolder>(
  {
    name: { type: String, required: true, unique: true },
    images: [{ type: Schema.Types.ObjectId, ref: 'ImageGallery' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    deletedAt: { type: Date },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

FolderSchema.statics.createFolder = async function (
  name: string,
): Promise<IFolder> {
  // check if folder already exists
  const folderExists = await this.findOne({ name });
  if (folderExists) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Folder already exists');
  }

  const folder = new this({ name });
  await folder.save();
  return folder;
};

FolderSchema.statics.deleteFolder = async function (
  name: string,
): Promise<void> {
  await this.findOneAndUpdate({ name }, { deletedAt: new Date() });
};

FolderSchema.virtual('totalImages').get(function () {
  return this.images.length;
});

const ImageGalleryModel = model<Gallery, GalleryModel>(
  'ImageGallery',
  ImageGallerySchema,
);
const FolderModel = model<IFolder, IFolderModel>('Folder', FolderSchema);

export { ImageGalleryModel, FolderModel };
