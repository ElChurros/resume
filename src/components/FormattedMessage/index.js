import { FormattedMessage } from "react-intl"
import SectionContext from "../../context/sectionContext"
import { useContext } from "react"

const FormattedMsg = ({ id, ...props }) => {
    const sectionPrefix = useContext(SectionContext)
    if (sectionPrefix !== '' && id !== '')
        id = `${sectionPrefix}.${id}`
    else if (sectionPrefix !== '')
        id = sectionPrefix
    return <FormattedMessage id={id} {...props} />
}

export default FormattedMsg