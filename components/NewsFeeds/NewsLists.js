import React from 'react';

import {
    ScrollView,
} from 'react-native';

import {
    Wordpress
} from '../../core/library/dist/Commons/Consumers/Wordpress/Wordpress';
import { FullScreenCard } from '../Cards/FullScreenCard';
const URI = {
    WP: 'http://www.mexicopublica.com/'
}
export class NewsLists extends React.Component {
    constructor() {
        super();
        this.state = { posts: null }
    }
    async getNews() {
        let wp = new Wordpress(URI.WP);
        let posts = await wp.posts({ _embed: true }).get();
        this.setState({ posts })
    }

    componentDidMount() {
        this.getNews();
    }
    renderCards() {
        const { posts } = this.state;
        return posts.map((item, key) => {
            let media = item['_embedded']['wp:featuredmedia'][0];
            let path = media.source_url;
            console.log(path);
            return (
                <FullScreenCard
                    key={key}
                    img={path}
                    text={item.excerpt.rendered}
                    title={item.title.rendered}
                />
            );
        });
    }
    render() {
        if (this.state.posts == null) {
            return (
                <FullScreenCard
                    text="Cargando..."
                    img="https://dummyimage.com/600x800/000/fff"
                />);
        }
        return (
            <ScrollView>
                {this.renderCards()}
            </ScrollView>);
    }
}