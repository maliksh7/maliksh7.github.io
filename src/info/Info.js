import self from "../img/self.png"
import mock2 from "../img/mock2.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Mubashir",
    lastName: "Yasin",
    initials: 'MY', // the example uses first and last, but feel free to use three or more if you like.
    position: "a DevOps Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the PK'
        },
        {
            emoji: "💼",
            text: "DevOps Engineer at Eon"
        },
        {
            emoji: "📧",
            text: "mubashir1998@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/mubashir.yasin.39/",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/m_fused/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Mfused07",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! 👋 I'm Mubashir. 💼 I'm an AWS / DevOps Engineer 🌐 working for Eon Health. 🏥 I studied CompSci 🖥️ at Fast NUCES 🎓, and I enjoy reading blogs 📚 and playing online games 🎮 in my free time! 😄",
    skills:
    {
        proficientWith: ['aws cloud', 'docker swarm', 'git', 'kubernetes', 'terraform', 'python', 'nodejs', 'linux', 'bash', 'jenkins', 'Travis CI', 'ansible', 'checkmk', 'elk', 'octopus deploy'],
        exposedTo: ['ruby', 'React', 'angular'],
        Certifications: ['AWS Certified Cloud Practitioner']
    }
    ,

    certifications: [{
        label: 'AWS Certified Cloud Practitioner',
        emoji: '🚀'
    },
    {
        label: 'AWS Certified Solutions Architect Associate',
        emoji: '🚀'
    }],
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'online games',
            emoji: '🎮'
        }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // Include devops engineer projects here
        // {
        //     title: "Jenkins Master-Slave on ECS using Terraform",
        //     live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
        //     source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
        //     image: mock1
        // },
        {
            title: "Centralized Monitoring of AWS infra using Checkmk",
            // live: "https://paytonpierce.dev",
            // source: "https://github.com/paytonjewell",
            image: mock2
        },
        // {
        //     title: "Centralized Logging using ELK",
        //     live: "https://paytonpierce.dev",
        //     source: "",
        //     image: mock3
        // },


    ]
}