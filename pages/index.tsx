import Head from 'next/head';
import { createClient, EntryCollection } from 'contentful';
import styles from '../styles/Home.module.css';
import { UnitCard } from '../src/components/UnitCard';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? '',
});

export default function Home({ units }: { units: EntryCollection<UnitType>['items'] }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                {units.map((item) => (
                    <UnitCard key={item.sys.id} title={item.fields.title} slug={item.fields.slug} />
                ))}
            </main>
        </div>
    );
}

export type UnitType = {
    slug: string;
    summary: string;
    title: string;
    values: Record<string, string>;
};

export async function getStaticProps() {
    const response = await client.getEntries<UnitType>({ content_type: 'unit' });
    return {
        props: {
            units: response.items,
        },
    };
}
