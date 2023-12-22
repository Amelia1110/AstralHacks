export const Body = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="max-w-7xl min-h-screen mx-auto py-20 px-6">{children}</div>
    )
}

const Columns = () => 
  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
    <div>Column 1</div>
    <div>Column 2</div>
  </div>


export const H1 = ({
    children, 
}: {
    children: React.ReactNode
}) => {
    return (
        <h1 className="text-white pt-10 pb-12 text-center text-5xl lg:text-6xl font-semibold tracking-wide">{children}</h1>
    )
}