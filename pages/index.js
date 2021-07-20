import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
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
