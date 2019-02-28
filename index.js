const uniqid = require("uniqid");
const ADDONS = [ "SUCCESS", "ERROR" ];

module.exports = ( actions, addons = ADDONS ) =>
    actions.reduce( ( a, item ) => {
        if ( typeof item !== "string" ) throw new Error( "action name must be a string" );
	const id = uniqid();
        const action = { ...a, [ item ]: `${ id }_${ item }` };
        return ( addons || [] ).reduce( ( b, addon ) => ( {
            ...b,
            [ `${ item }_${ addon }` ]: `${ id }_${ item }_${ addon }`,
        } ), action );
    }, {} );

