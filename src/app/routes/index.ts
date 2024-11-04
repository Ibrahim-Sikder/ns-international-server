/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { authRoutes } from '../modules/Auth/auth.route';
import { userRoutes } from '../modules/user/user.route';
import { aboutRoutes } from '../modules/about/about.route';
import { contactRoutes } from '../modules/contact/contact.route';
import { galleryRoutes } from '../modules/gallery/gallery.route';
import { productRoutes } from '../modules/products/products.route';
import { servicesRoutes } from '../modules/services/service.route';
import { reviewRoutes } from '../modules/review/review.route';
const router = Router();

const moduleRoutes = [
  {
    path: '/user',
    route: userRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/gallery',
    route: galleryRoutes,
  },

  {
    path: '/about',
    route: aboutRoutes,
  },
  {
    path: '/contact',
    route: contactRoutes,
  },
  {
    path: '/products',
    route: productRoutes,
  },
  {
    path: '/services',
    route: servicesRoutes,
  },
  {
    path: '/review',
    route: reviewRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
