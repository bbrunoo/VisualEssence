const [state, setState] = useState(false);
const toggle = () => {
    setState(!state);
}

const sobre = useRef(null);
const ongs = useRef(null);
const jogos = useRef(null);
const contato = useRef(null);

const scrollToSection = (elementRef) => {
    window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth'
    })

}

