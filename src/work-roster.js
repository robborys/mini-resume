import { LitElement, html, css } from 'lit';
import "./mini-resume2.js";

export class WorkRoster extends LitElement {
    static get tag() {
        return 'work-roster';
    }
    static get properties() {
        return {
          candidates: { type: Array },
          company: { type: String },
        }
    }

    constructor() {
        super();
        this.candidates = [];
        this.company = 'Finance Corp.';
        this.updateRoster();
    }

    updateRoster() {
        const address = new URL('../api/roster', import.meta.url).href;
        fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.candidates = data;
        });
    }
    
    static get styles() {
        return css`
        :host {
            display: block;
        }
        .wrapper {
            border: 2px solid black;
            display: flex;
        }
        .item {
            display: inline-flex;
        }
    `;
    }

    render() {
        return html`
        <h2>${this.company}</h2>
        <div class="wrapper">
            ${this.candidates.map(candidate => html`
            <div class="item">
            <mini-resume2 
        name="Janice" profilepicture="https://pbs.twimg.com/profile_images/761959313493504001/IhcScBnQ.jpg" major="Bag Piping" school="Florida Memorial University" new-color="green" shadow-enable imagetoptext="Pipe go" imagebottomtext="yuurrr">
          <div slot="infoslot">
            <ul>
              <details class="skills">
                <summary>Skills</summary>
                <li>skills go here</li>
              </details>
              <details class="exp">
                <summary>Work Experience</summary>
                <li>work experince goes here</li>
              </details>
              <details class="course">
                <summary>Relevant Course Work</summary>
                <li>relevant coursework goes here</li>
              </details>
            </ul>
          </div>
        </mini-resume2>
            </div>
            `)}
        </div>
        `;
    }
}
customElements.define(TeamRoster.tag, TeamRoster);