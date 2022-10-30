import { T_ResumeSectionProps } from "components/Resume/ResumeSection";
import Summary from "components/Resume/Sections/Summary";

const RESUME_SUMMARY_TEMPLATE: T_ResumeSectionProps['children'] = [
    {
        id: 'short-bio',
        title: 'Michael Navasardyan',
        info: 'Experienced Front-End Engineer',
        markup: <Summary />
    }
]

const RESUME_EDUCATION_TEMPLATE: T_ResumeSectionProps['children'] = [
    {
        id: 'education-phd',
        title: 'PhD student of Macroeconomics',
        info: 'Armenian State University of Economics',
        activityStart: 'September 2021',
        activityEnd: 'Present',
    },
    {
        id: 'education-master',
        title: 'Master of Macroeconomics',
        info: 'Armenian State University of Economics',
        activityStart: 'September 2019',
        activityEnd: 'June 2021',
    },
    {
        id: 'education-bachelor',
        title: 'Bachelor of Mathematical Methods and Modelling',
        info: 'Armenian State University of Economics',
        activityStart: 'September 2015',
        activityEnd: 'June 2019',
    },
]

export const RESUME_TEMPLATE_LEFT: T_ResumeSectionProps[] = [
    {
        title: 'Summary',
        children: RESUME_SUMMARY_TEMPLATE
    },
    {
        title: 'Education',
        children: RESUME_EDUCATION_TEMPLATE
    },
]

export const RESUME_EXPERIENCE_TEMPLATE: T_ResumeSectionProps['children'] = [
    {
        id: 'volo',
        title: 'JavaScript Developer',
        info: 'VOLO, Yerevan, Armenia',
        activityStart: 'April 2022',
        activityEnd: 'Present',
    },
    {
        id: 'boomtech',
        title: 'Software Engineer',
        info: 'BoomTech, Yerevan, Armenia',
        activityStart: 'July 2020',
        activityEnd: 'May 2022',
    },
    {
        id: 'sololearn',
        title: 'Code Coaches Writer',
        info: 'SoloLearn, Yerevan, Armenia',
        activityStart: 'August 2020',
        activityEnd: 'January 2021',
    },
    {
        id: 'digi',
        title: 'Front-End Developer',
        info: 'Digitial Brains, Yerevan, Armenia',
        activityStart: 'October 2019',
        activityEnd: 'June 2020',
    },
]