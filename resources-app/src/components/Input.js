import React from "react";

function Input() {
    return (
        <div>
            <div class="input-group mb-3">
                <input id='rep' type="text" class="form-control rep-input" placeholder="Enter your address here" aria-label="Recipient's address" aria-describedby="button-addon2"/>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary rep-btn" type="button" id="button-addon2">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Input 