const Picture = ({ src }) => {
    return (
        <li>
            <picture><img src={src} alt="" /></picture>
        </li>)
}
export default Picture;