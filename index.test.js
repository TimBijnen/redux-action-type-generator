const actionType = require("./index");

describe( "Test", () => {
    it( "can generate unique action types", ( ) => {
        const types = actionType( [ "LOAD" ] );
        expect( types ).toHaveProperty( "LOAD" );
        expect( types ).toHaveProperty( "LOAD_SUCCESS" );
	expect( types ).toHaveProperty( "LOAD_ERROR" );
	console.log(types)    
    } );

    it( "can generate unique action types", ( ) => {
        const types = actionType( [ "LOAD" ], [] );
        expect( types ).toHaveProperty( "LOAD" );
        expect( types ).not.toHaveProperty( "LOAD_SUCCESS" );
    } );

    it( "can generate unique action types", ( ) => {
        const types = actionType( [ "LOAD" ], null );
        expect( types ).toHaveProperty( "LOAD" );
        expect( types ).not.toHaveProperty( "LOAD_SUCCESS" );
    } );

    it( "can generate unique action types", ( ) => {
        const types = actionType( [ "LOAD" ], [ "TEST" ] );
        expect( types ).toHaveProperty( "LOAD" );
        expect( types ).toHaveProperty( "LOAD_TEST" );
    } );

    it( "gives a neat error", ( ) => {
        expect( () => actionType( [ "LOAD", [] ] ) ).toThrow( "action name must be a string" );
    } );
} );

