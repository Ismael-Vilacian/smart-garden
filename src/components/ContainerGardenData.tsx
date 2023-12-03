import React from "react"

export class ContainerGardenData extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    public render() {
        const { data } = this.props

        return (
            <div className="container-garden-data">
                <div className="container-garden-data_header">
                    Informações gerais sobre seus jardins
                </div>


                <div className="container-garden-data_information">
                    {data.map((item: any) => {
                        return (
                            <div className="container-garden-data_percentage-description">
                                <div className="container-garden-data_value">
                                    {item.value}{item.temperature ? (<span>°</span>) : (<span>%</span>)}
                                </div>
                                <div className="container-garden-data_description">
                                    {item.description}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

interface Props {
    data: PropsData[];
}

interface PropsData {
    value: number;
    description: string;
    temperature?: boolean;
}