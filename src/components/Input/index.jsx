import './styles.scss';

export default function Input({className, textarea, ...props}) {
    return (
        <>
            {
            textarea ?
                <textarea {...props} className={"input " + className} />
            :
                <input {...props} className={"input " + className} />
            }
        </>
    )
}
