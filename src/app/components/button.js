export default function Button({ children }) {
    return (
        <div className="flex items-center justify-center absolute bottom-[6rem] inset-x-0">
            <div className="button flex items-center justify-center bg-black text-white py-[1.5rem] px-[2rem] rounded-full text-[1.5rem] leading-[1.6rem]">
                {children}
            </div>
        </div>

    )
}