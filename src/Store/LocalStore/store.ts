interface INavigationMenu{
    id:number,
    href:string,
    text:string
}

export const NavigationMenu:INavigationMenu[]=[
{id:0, href:'/', text:'На главную'},
{id:1, href:'/admin', text:'Панель администрирования'},
{id:2, href:'/admin/user', text:'Страница пользователя'},
]