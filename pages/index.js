import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";
import { getSession } from "next-auth/client";

export default function Home(props) {
    const { session } = props;
    console.log(session);

    if (!session) {
        return <Login />;
    }
    return (
        <div>
            <Head>
                <title>Facebook 2.0</title>
            </Head>

            {/* Header Section */}
            <Header />
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    return {
        props: {
            session,
        },
    };
}
