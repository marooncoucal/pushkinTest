export default function ContainerPage({ children }) {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col gap-[18rem] w-full max-w-[720px] aspect-[9/16] bg-zinc-100 relative p-[2rem]">
                {children}
            </div>
        </div>
    )
}