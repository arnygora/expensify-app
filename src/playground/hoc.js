import React from 'react'
import ReactDOM from 'react-dom'

const View = ({text}) => (
    <div>
        <h1>some text is: {text}</h1>
    </div>
);

const AdminInfo = (EntireComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>Please, don't forget about your sweet</p>}
            <EntireComponent {...props}/>
        </div>
    )
};

const WithAdminInfo = AdminInfo(View);

const AdminPage = () => (
    <div style={{backgroundColor: 'cyan', padding: 50}}>
        <h1>Welcome my liber froilen</h1>
    </div>
);

const CheckUser = (InnerComponent) => {
    return (props) => (
        <div>
            <InnerComponent/>
            <div>
                {props.isAuth ? (
                    <p style={{backgroundColor: 'lightBlue', padding: 50}}>Glad to see you</p>
                ) : (
                    <p style={{backgroundColor: 'indianRed', padding: 50}}>Please, enter before</p>
                )}
            </div>
        </div>
    )
};

const RequireAuthentication = CheckUser(AdminPage);


// ReactDOM.render(<WithAdminInfo isAdmin={true} text='added text from HOC'/>, document.getElementById('app'));
ReactDOM.render(<RequireAuthentication isAuth={true}/>, document.getElementById('app'));