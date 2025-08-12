import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import path from 'path';
import { BioComponent } from './bio/bio.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { OfferdServicesComponent } from './offerd-services/offerd-services.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

export const routes: Routes = [

{    path: '',
    component :HeroComponent,
    title: 'Cover Page'

}
    ,
    {
        path: 'bio',
        component: BioComponent,
        title: 'About Me'
    }
    ,{
        path: 'education',
        component: EducationComponent,
        title: 'Education'
    }
    ,{
        path: 'skills',
        component: SkillsComponent,
        title: 'Skills'
    },
    {
        path : 'projects',
        component: ProjectsComponent,
        title: 'Projects'
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: 'Contact Me'
    },
    {
        path: "Offerd Services",
        component: OfferdServicesComponent,
        title: 'Offerd Services'
    },
    {
        path: 'work-experience',
        component: WorkExperienceComponent,
        title: 'Work Experience'
        
    }
];
