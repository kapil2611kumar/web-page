const Layout = ({children}) => {
    const layoutstyle = {
        margin: "1.5rem 2rem",
        dispaly: "flex",
        flexDirection:"column",
        rowGap: "5rem",

    }
    return <main style={layoutstyle}>
        {children}</main>;
    
} ;

export default Layout;