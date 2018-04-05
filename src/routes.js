'use strict';

import DynamicImport from 'app/components/DynamicImport';

const WebsiteRoutes = {
    childRoutes: [

        {
            path: '/',
            indexRoute: {
                getComponent(location, cb) {
                    DynamicImport(
                        import(/* webpackChunkName: "home" */'app/content/Home'),
                        cb,
                        'home'
                    );
                },
            }
        },
        {
            path: 'features',
            indexRoute: {
                getComponent(location, cb) {
                    DynamicImport(
                        import(/* webpackChunkName: "home" */'app/content/Features'),
                        cb,
                        'features'
                    );
                },
            }
        },
        {
            path: 'hello',
            indexRoute: {
                getComponent(location, cb) {
                    DynamicImport(
                        import(/* webpackChunkName: "home" */'app/content/Hello'),
                        cb,
                        'hello'
                    );
                },
            }
        }

    ],
};

export default WebsiteRoutes;