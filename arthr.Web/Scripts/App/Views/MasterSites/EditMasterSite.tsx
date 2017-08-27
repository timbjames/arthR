// 3rd Party
import * as React from 'react';

// Base
import { RoutedBaseComponent } from '../../BaseComponent';

// Module
import { MasterSiteUpsertForm } from './MasterSiteUpsertForm';

export class EditMasterSite extends RoutedBaseComponent {

    componentDidMount() {

        const { appActions, appState, match } = this.props;
        const { params } = match;

        appActions.masterSite.getMasterSiteAsync(params.masterSiteId);
    }

    render() {

        return (
            <div className="row">

                <div className="col-xs-12">

                    <h2>Edit</h2>

                    <MasterSiteUpsertForm {...this.props} />

                </div>

            </div>
        );
    }
}
