const uniqid = require("uniqid");
const EXTENSIONS = [ "SUCCESS", "ERROR" ];

const create = ( {
    actions = [],
    asyncActions = [],
    extensions = EXTENSIONS,
} ) => {
    return {
	...createActions( actions ),
	...createAsyncActions( asyncActions, extensions ),
    }
};

const createActions = actions =>
    actions.reduce( ( a, item ) => {
        if ( typeof item !== "string" ) throw new Error( "action name must be a string" );
	const id = uniqid();
        return { ...a, [ item ]: `${ id }_${ item }` };
    }, {} );

const createAsyncActions = ( actions, extensions ) =>
    actions.reduce( ( a, item ) => {
        if ( typeof item !== "string" ) throw new Error( "action name must be a string" );
	const id = uniqid();
        const action = { ...a, [ item ]: `${ id }_${ item }` };
        return extensions.reduce( ( b, addon ) => ( {
            ...b,
            [ `${ item }_${ addon }` ]: `${ id }_${ item }_${ addon }`,
        } ), action );
    }, {} );

module.exports = create;
module.exports.createActions = createActions;
module.exports.createAsyncActions = createAsyncActions;
