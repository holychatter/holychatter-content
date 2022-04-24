
function Bubble({ children }) {

    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <div className='hc-logo-user-triangle-box' style={{ paddingRight: 14, paddingLeft: 10 }}>
                            <div className='hc-white-font hc-bubble hc-answer-text' style={{ minHeight: 35, maxWidth: 700, padding: 10, backgroundColor: '#429fe2' }}>
                                <span className='hc-content-text'>
                                    <span style={{ whiteSpace: 'pre-wrap', whiteSpace: '-moz-pre-wrap', whiteSpace: '-pre-wrap', whiteSpace: '-o-pre-wrap', whiteSpace: 'break-word' }}>{children}</span>
                                </span>
                            </div>
                        </div>
                    </td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Bubble



