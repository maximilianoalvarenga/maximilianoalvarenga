import github from '../assets/github.png';
import email from '../assets/email.png';
import linkedin from '../assets/linkedin.png';
import discord from '../assets/discord.png';
import userPicture from '../assets/profile/userPicture.jpg';

export const userInformations = {
    name: 'MAXIMILIANO ALVARENGA',
    role: 'FullStack Developer',
    image: userPicture,
};

export const socialInformations = [
    {
        name: 'Github',
        image: github,
        link: 'https://github.com/maximilianoalvarenga',
    },
    {
        name: 'Email',
        image: email,
        link: 'mailto:maximilianoabispo@gmail.com',
    },
    {
        name: 'Linkedin',
        image: linkedin,
        link: 'https://www.linkedin.com/in/maximiliano-alvarenga/',
    },
    {
        name: 'Discord',
        image: discord,
        link: 'https://discordapp.com/users/408689201564090368',
    },
];

export const projects = [
    {
        name: 'Riot Client',
        url: 'https://maximilianoalvarenga.github.io/login-league-of-legends/',
        tags: ['react', 'frontend', 'clone']
    },
    {
        name: 'Desafio Capgemini',
        url: 'https://maximilianoalvarenga.github.io/desafio-capgemini/',
        tags: ['react', 'frontend', 'backend', 'desafio']
    },
];