type TechStack = {
    id_tech: number,
    name:string,
}


type Project = {
    id: number,
    titleProject: string,
    image:string,
    description: string,
    link: string,
    techs_stack: TechStack[]
}