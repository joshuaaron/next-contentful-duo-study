import Link from 'next/link';
type UnitCardProps = {
    title: string;
    slug: string;
};

export function UnitCard({ title, slug }: UnitCardProps) {
    return (
        <div>
            <p>This unit title is {title}</p>
            <Link href={`/units/${slug}`}>
                <a>Click here</a>
            </Link>
        </div>
    );
}
