import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'resume',
    loadComponent: () => import('./resume/resume.page').then( m => m.ResumePage)
  },
  {
    path: 'projects',
    loadComponent: () => import('./projects/projects.page').then( m => m.ProjectsPage)
  },
];
