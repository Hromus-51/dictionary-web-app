import {
    SourceUrlsUl,
    SourceUrlsLi,
    Url
} from './styled-components';
//==========================================
import iconNewWindow from '../../assets/images/icon-new-window.svg';

const SourceList: React.FC<{ sourceUrls: string[] }> = ({ sourceUrls }) => {
    return (
        <SourceUrlsUl>
            {sourceUrls.map((url, index) => (
                <SourceUrlsLi key={index}>
                    <Url href={url} target="_blank">
                        {url}
                    </Url>
                    <img src={iconNewWindow} />
                </SourceUrlsLi>
            ))}
        </SourceUrlsUl>
    );
}

export default SourceList;