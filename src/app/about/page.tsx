export default async function About() {
    const res = await fetch('/api/pokemon', {
        method: 'GET'
    })
    console.log("res: ");
    return(
        <div>
            About
        </div>
    )
}