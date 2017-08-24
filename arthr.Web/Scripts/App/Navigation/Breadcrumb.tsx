import * as React from 'react';
import { Link } from 'react-router-dom';

// Utility
import { IBreadCrumbLink } from '../../Utility';

interface IBreadcrumbProps {
    active: string;
    links?: IBreadCrumbLink[];
}

export class Breadcrumb extends React.Component<IBreadcrumbProps, {}>{

    render() {

        const { active, links } = this.props;

        return (
            <ol className="breadcrumb">
                <li><Link to="/"><i className="glyphicon glyphicon-home"></i></Link></li>

                {
                    links && links.map((link, index) => {
                        return <li key={index}><Link to={link.href}>{link.name}</Link></li>
                    })
                }

                <li className="active">{active}</li>
            </ol>
        );
    }
}
