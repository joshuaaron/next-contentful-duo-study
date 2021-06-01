import { createClient, Entry, EntryCollection } from 'contentful';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { UnitType } from '../index';
import { ParsedUrlQuery } from 'querystring';

export default function UnitDetails({ unit }: any) {
    return (
        <div>
            <div>Unit Details</div>
            <Link href={'/'}>
                <a>Go home</a>
            </Link>
        </div>
    );
}

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? '',
});

export async function getStaticPaths() {
    const response = await client.getEntries<UnitType>({
        content_type: 'unit',
    });

    return {
        paths: response.items.map((item) => ({
            params: {
                slug: item.fields.slug,
            },
        })),
        fallback: false,
    };
}

interface Params extends ParsedUrlQuery {
    slug: string;
}

type Props = {
    unit: Entry<UnitType>;
};

export const getStaticProps: GetStaticProps<Props, Params> = async (ctx) => {
    const { items } = await client.getEntries<UnitType>({
        content_type: 'unit',
        'fields.slug': ctx.params!.slug,
    });

    return {
        props: {
            unit: items[0],
        },
    };
};
