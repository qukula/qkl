const commonPath = '/qkl/menu1';

export default [
    {
        text: 'Vue2',
        collapsible: true,
        collapsed: true,
        items: [
            { text: 'Vue页面模版', link: `${commonPath}/Vue2/Vue页面模版.md` },
        ]
    },
    {
        text: '小程序',
        collapsible: true,
        collapsed: true,
        items: [
            { text: '小程序page模版', link: `${commonPath}/小程序/小程序page模版.md` },
            { text: '小程序components模板', link: `${commonPath}/小程序/小程序components模板.md` },
        ]
    }
]