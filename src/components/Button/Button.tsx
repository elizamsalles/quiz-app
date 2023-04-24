import styled from 'styled-components'


const Text = styled.text `
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: var(--purple);
    margin-right: 82px;
    margin-top: 15px;   
`

const FirstButton = styled.button`
    width: 400px;
    height: 56px;
    background: #FFFFFF;
    border: 2px solid rgba(96, 102, 208, 0.7);
    border-radius: 12px;
    margin-left: 32px;
    margin-bottom: 31px;
    margin-top: 136px; 
    cursor: pointer;  
`

const Button = styled.button`
    
    width: 400px;
    height: 56px;
    background: #FFFFFF;
    border: 2px solid rgba(96, 102, 208, 0.7);
    border-radius: 12px;
    margin-left: 32px;
    margin-bottom: 31px;
    cursor: pointer;
`

function ButtonComponent () {
    return (
    <div>
        <FirstButton key="A"><Text> Vietnam</Text></FirstButton>
        <Button key="B"><Text> Malasya</Text></Button>
        <Button key="C"><Text> Sweden</Text></Button>
        <Button key="D"><Text> Austria</Text></Button>

    </div>
    )
}
export default ButtonComponent;