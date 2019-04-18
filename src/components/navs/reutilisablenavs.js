import React from 'react';


class Tab extends React.Component {
    constructor(props) {
        super(props);
    }

    TabHeader() {
        return (
            <ul className="nav nav-pills nav-tabs-btn" role="tablist">
                {
                    this.props.tabs.map((item, index) => {
                        return (
                            <li key={index} className="nav-item">
                                <a className={item.isActive ? 'nav-link active' : 'nav-link'} data-toggle="tab" href={"#" + item.id} role="tab">
                                    <span className="nav-link-icon"><i className={item.icon}></i></span>
                                    <span className="nav-link-title">{item.title}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }

    render() {
        return (
            <div className="row">
                <div className="sidebar col-200">
                    <div className="ul-container">
                        {this.TabHeader()}
                    </div>
                </div>
                <div className="tab-content col">
                    {this.props.children}
                </div>
            </div>

        )
    }
}
export default Tab;