type InputProps = {
    className?: string,
    placeHolder?: string,
    type?: string
}

export default function Input({ className = '', placeHolder = '', type = 'text' }: InputProps) {
    return (
        <input className={`${className} transition-all duration-500 rounded-lg p-2 pl-3 pr-3 shadow outline-0 hover:shadow-2xl focus:p-5 focus:outline-dashed focus:outline-1 focus:outline-deep-blue`} placeholder={placeHolder} type={type}/>
    );
}
