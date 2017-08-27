// 3rd Party
import * as React from 'react';

// Base
import { BaseComponent } from '../../BaseComponent';

// Module
import { MasterSiteUpsertForm } from './MasterSiteUpsertForm';

export class CreateMasterSite extends BaseComponent<{}> {

    componentDidMount() {

        const { appActions } = this.props;

        appActions.masterSite.getMasterSiteAsync(0);
    }

    render() {

        return (
            <div className="row">

                <div className="col-xs-12">

                    <h2>Create</h2>

                    <MasterSiteUpsertForm {...this.props} />

                </div>

            </div>
        );
    }
}
