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
        activityStart: '2021',
        activityEnd: 'Present',
    },
    {
        id: 'education-master',
        title: 'Master of Macroeconomics',
        info: 'Armenian State University of Economics',
        activityStart: '2019',
        activityEnd: '2021',
    },
    {
        id: 'education-bachelor',
        title: 'Bachelor of Mathematical Methods and Modelling',
        info: 'Armenian State University of Economics',
        activityStart: '2015',
        activityEnd: '2019',
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
        activityStart: '2022',
        activityEnd: 'Present',
    },
    {
        id: 'boomtech',
        title: 'Software Engineer',
        info: 'BoomTech, Yerevan, Armenia',
        activityStart: '2020',
        activityEnd: '2022',
    },
    {
        id: 'sololearn',
        title: 'SoloLearn',
        info: 'Code Coaches Writer, Yerevan, Armenia',
        activityStart: '2022',
        activityEnd: '2022',
    },
    {
        id: 'digi',
        title: 'Digitial Brains',
        info: 'Front-End Developer, Yerevan, Armenia',
        activityStart: '2019',
        activityEnd: '2020',
    },
]