import React from "react"

export class HeaderStandard extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    public render() {
        const { userName } = this.props

        return (
            <div className="container-header">
                <div className="container-header_data">
                    <div className="container-header_logo-action">
                        <div className="container-header_logo">
                            <img width ="255px" src="assets/logo-name.svg" />
                        </div>

                        <div className="container-header_logout">
                            sair <i className="bi bi-door-open-fill"></i>
                        </div>
                    </div>
                    
                    <div className="container-header_username-settings">
                        <div className="container-header_username">
                            Olá, {userName}
                        </div>

                        <div className="container-header_settings">
                            Configurações <i className="bi bi-gear-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

interface Props {
    userName: string;
}