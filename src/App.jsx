/*!
* Copyright 2024-Present Animoca Brands Corporation Ltd. 
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import React from 'react';

// @ts-ignore
import { OCConnect } from '@opencampus/ocid-connect-js';

import Routes from './components/Routes';

// load uri from .env file
// let redirectUri = import.meta.env.VITE_AUTH_REDIRECT_URI
function App() {
    const opts = {
        redirectUri: 'http://localhost:8080/redirect',
        referralCode: 'TEST123', // pass referral code to Authentication Service
    };

    return (
        <OCConnect opts={opts} sandboxMode={true}>
            <div className="App">
                <header className="App-header" style={{textAlign: 'center'}}>OpenEdu integration with OCID Edu</header>
                <br/>
                <main>
                    <Routes />
                </main>
            </div>
        </OCConnect>
    );
}

export default App;
