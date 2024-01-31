import { SiJavascript, SiPython, SiHtml5, SiCss3, SiReact, SiGithub, SiInstagram, SiTailwindcss } from "react-icons/si";

function Title(props) {
    return (
        <h1 className="text-zinc-700 text-lg dark:text-zinc-300">{props.text}</h1>
    )
}

function AboutMe() {
    return (
        <div className=" flex flex-col w-auto">
            <Title text='Sobre Mim:' />
            <p className="text-base font-normal pl-3 pt-2 md:text-xl dark:text-zinc-100">Estudante do Instituto Federal de Rondônia, Formando em Técnico em Informática, Sempre a procura de conhecimentos e novas tecnologias.</p>
        </div>
    )
}

function Skills() {

    var Icons = {
        'JavaScript': 'JavaScript: Intermediario',
        'Python': 'Python: Intermediario',
        'HTML 5': 'HTML 5: Intermediario',
        'CSS 3': 'CSS 3: Intermediario',
        'React': 'React: Intermediario',        
        'Tailwind': 'TailWind: Intermediario'
    }

    return (
        <div className="">
            <Title text='Habilidades:' />
            <div className="px-3 pt-2 flex gap-3 items-center dark:text-zinc-100">
                <SiJavascript />
                <p className="text-base md:text-xl">{Icons.JavaScript}</p>
            </div>
            <div className="px-3 pt-2 flex gap-3 items-center dark:text-zinc-100">
                <SiPython />
                <p className="text-base md:text-xl">{Icons.Python}</p>
            </div>
            <div className="px-3 pt-2 flex gap-3 items-center dark:text-zinc-100">
                <SiHtml5 />
                <p className="text-base md:text-xl">{Icons["HTML 5"]}</p>
            </div>
            <div className="px-3 pt-2 flex gap-3 items-center dark:text-zinc-100">
                <SiCss3 />
                <p className="text-base md:text-xl">{Icons["CSS 3"]}</p>
            </div>
            <div className="px-3 pt-2 flex gap-3 items-center dark:text-zinc-100">
                <SiReact />
                <p className="text-base md:text-xl">{Icons.React}</p>
            </div>
            <div className="px-3 pt-2 flex gap-3 items-center dark:text-zinc-100">
                <SiTailwindcss />
                <p className="text-base md:text-xl">{Icons.Tailwind}</p>
            </div>
        </div>
    )
}

function Button(props) {
    return (
        <div className="w-44">
            <a href={props.link} target="_blank" rel="noopener noreferrer" className="">
                <div className="p-1 bg-green-400 w-auto h-10 rounded-xl flex items-center justify-center text-base transition-all  hover:bg-zinc-800 hover:text-green-400">
                    {props.title}
                </div>
            </a>
        </div>
    )
}

function Projects() {

    function Repository(props) {
        return (
            <div className="pl-3 pt-2 flex flex-col gap-1">
                <p className="text-base md:text-xl dark:text-zinc-100">{props.title}</p>
                <Button link={props.link} title='Visite meu repositorio' />
            </div>
        )
    }


    var Links = {
        'YourTime': 'https://github.com/douglasarthurr/appYourTime',
        'Search-CEP': 'https://github.com/Robson-oliveiraa/Project-Search-CEP',
        'Calculadora-HTML': 'https://github.com/Robson-oliveiraa/Calculadora',
    }

    return (
        <div className="">
            <Title text='Projetos:' />
            <div className="flex flex-col gap-2">
                <Repository title='You Time: Aplicativo desenvolvido com amigos' link={Links.YourTime} className="dark:text-zinc-100"/>
                <Repository title='Search CEP' link={Links["Search-CEP"]} className="dark:text-zinc-100"/>
                <Repository title='Calculadora HTML, CSS e JavaScript' link={Links["Calculadora-HTML"]} className="dark:text-zinc-100"/>
            </div>
        </div>
    )
}

function SocialMedia() {

    var Links = {
        'Github-link': 'https://github.com/Robson-oliveiraa',
        'Instagram-link': 'https://www.instagram.com/robso_andre/?next=%2F'
    }

    function TextMedia(props) {

        if (props.Insta === true) {
            return (
                <div className="flex flex-row items-center gap-2">
                    <SiInstagram className="dark:text-zinc-100"/>
                    <p className="text-base md:text-xl dark:text-zinc-100">Instagram <a href={props.link} target="_blank" rel="noopener noreferrer" className=" transition-all hover:text-green-500">{props.user}</a></p>
                </div>
            )
        } else if (props.Git === true) {
            return (
                <div className="flex flex-row items-center gap-2">
                    <SiGithub className="dark:text-zinc-100"/>
                    <p className="text-base md:text-xl dark:text-zinc-100">GitHub: <a href={props.link} target="_blank" rel="noopener noreferrer" className="transition-all hover:text-green-500">{props.user}</a></p>
                </div>
            )
        }
    }

    return (
        <div className="mb-8">
            <Title text='Redes Sociais:' />
            <div className="flex flex-col gap-2 pl-3 pt-2">
                <TextMedia Insta={true} link={Links["Instagram-link"]} user='@robso_andre' />
                <TextMedia Git={true} link={Links["Github-link"]} user='Robson-oliveiraa' />
            </div>
        </div>
    )
}

export default function Body() {
    return (
        <div className="px-6 md:mx-16 xl:grid xl:grid-cols-2 gap-12 my-14 flex flex-col py-3 ">
            <div className=" flex flex-col gap-12 pr-3">
                <AboutMe />
                <Skills />
            </div>
            <div className="flex flex-col gap-12 xl:border-l xl:border-black xl:pl-5 dark:border-white">
                <Projects />
                <SocialMedia />
            </div>
        </div>
    )
}