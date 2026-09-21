import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'I AM TIKIH — Tikih Ranjisoa, Travel & Lifestyle Creator',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'references',
    title: 'References — I AM TIKIH',
    loadComponent: () => import('./pages/references/references').then((m) => m.References),
  },
  {
    path: 'contact',
    title: 'Contact — I AM TIKIH',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: '**',
    title: 'Page not found — I AM TIKIH',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
