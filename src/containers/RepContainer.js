import React from 'react';
import ContactCard from '../components/rep/ContactCard';
import { connect } from 'react-redux';

class RepContainer extends React.Component {
    // still need getTitle(id) function to put title on page

    render() {
        const { rep } = this.props;

        return (
            <div className="container">
                <h1>{rep.name}</h1>
                <p>{rep.party}</p>
                <ContactCard
                    phones={rep.phones || null}
                    emails={rep.emails || null}
                    address={rep.address || null}
                    channels={rep.channels || null}
                    urls={rep.urls || null}
                />
            </div>
        )
    }
    
}

const mapStateToProps = (state, { match }) => {
    return {
        rep: state.repsData.reps[match.params.repId]
    }
}

export default connect(mapStateToProps)(RepContainer);