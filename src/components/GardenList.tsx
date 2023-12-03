import React from "react"

export class GardenList extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    public render() {
        const { data } = this.props

        return (
            <div className="container-garden-list">
                <div className="container-garden-list_header">
                    Seus Jardins
                </div>

                <div className="container-garden-list_data">
                    {data.map((item: any) => {
                        return (
                            <div className="container-garden-list_img-description">
                                <div className="container-garden-list_img">
                                    <img width="100%" src={item.imagePath} />
                                </div>
                                <div className="container-garden-list_description">
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
    imagePath: string;
    description: string;
}