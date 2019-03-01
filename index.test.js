const actionType = require("./index");

const actions = {
    actions: [ "UPDATE" ],
    asyncActions: [ "LOAD", "DELETE" ],
    extensions: [ "ERROR", "SUCCESS" ],
};



describe( "Test", () => {
    it( "can generate unique action types", ( ) => {
        const types = actionType( { asyncActions: [ "LOAD" ] } );
        expect( types ).toHaveProperty( "LOAD" );
        expect( types ).toHaveProperty( "LOAD_SUCCESS" );
	expect( types ).toHaveProperty( "LOAD_ERROR" );
    } );

    it( "can generate unique action types", ( ) => {
	const types = actionType( {
	    asyncActions: [ "LOAD" ],
	    extensions: [ "FAIL", "SUCCEEDED" ],
	} );
        expect( types ).toHaveProperty( "LOAD" );
        expect( types ).toHaveProperty( "LOAD_SUCCEEDED" );
	expect( types ).toHaveProperty( "LOAD_FAIL" );
    } );


    it( "can generate unique action types", ( ) => {
        const types = actionType( { actions: [ "LOAD" ] } );
        expect( types ).toHaveProperty( "LOAD" );
        expect( types ).not.toHaveProperty( "LOAD_SUCCESS" );
    } );

    it( "can generate unique action types", ( ) => {
        const types = actionType( { actions: [ "LOAD" ] } );
        expect( types ).toHaveProperty( "LOAD" );
        expect( types ).not.toHaveProperty( "LOAD_SUCCESS" );
    } );
    
    it( "gives a neat error", ( ) => {
        expect( () => actionType( { actions: [ "LOAD", [] ] } ) ).toThrow( "action name must be a string" );
    } );

    it( "Can generate from an object", () => {
	const types = actionType( actions );
        expect( types ).toHaveProperty( "UPDATE" );
        expect( types ).toHaveProperty( "LOAD" );   
	expect( types ).toHaveProperty( "LOAD_SUCCESS" );
    } );
} );

