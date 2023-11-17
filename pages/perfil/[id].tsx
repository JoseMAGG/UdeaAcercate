import { Navbar } from '@/components/navbar/Navbar'
import { MdHomeFilled } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ApolloClient, InMemoryCache, useQuery } from '@apollo/client';
import { GET_PROFILE } from '@/graphql/client/profile';
import { Profile } from '@/prisma/generated/type-graphql';
import { Loading } from '@/components/ui/Loading';

const Perfil = () => {
    const { data: Session, status } = useSession();
    const router = useRouter();
    const id = router.query.id;
    const { data: profileData, loading, error } = useQuery<{ profile: Profile }>(
        GET_PROFILE,
        {
            variables: { userId: id },
            fetchPolicy: 'no-cache',
        }
    );
    console.log("Id:" + id)
    if (loading) return (<Loading />)
    console.log("Profile:", profileData)
    console.log("error:", error)
    const profile = profileData?.profile
    const user = profile?.user
    return (

        <div className='Yellow-little gap-15 flex flex-col h-screen'>
            <div>
                <Navbar>
                    <Link href={'/home'}>
                        <div className='h-full flex items-center justify-center'>
                            <MdHomeFilled className="h-9 w-9 mr-20" />
                        </div>
                    </Link>
                </Navbar>
            </div>

            <div className='debug h-full flex flex-row'>
                <div className='debug w-1/3 flex flex-col items-center p-4 gap-4'>
                    <Image src={user?.image!} alt={'avatar-image'} height={300} width={300} className='debug rounded-full' />
                    <span className='text-xl font-extrabold'>{user?.name}</span>
                    <span className='text-sm font-bold'>{profile?.faculty}</span>
                    <span className='text-sm font-bold'>{profile?.career}</span>
                    <span className='text-sm font-bold'>{profile?.campus?.replace('_', ' ')}</span>
                    <span className='text-sm font-bold'>{profile?.type}</span>
                    <span className='text-sm font-bold mr-7 ml-7'>
                        {profile?.description}
                    </span>
                    <span className='text-sm font-bold mr-7 ml-7'>
                        {profile?.hobbies}
                    </span>
                    <span className='text-sm font-bold mr-7 ml-7'>
                        {profile?.socialLinks}
                    </span>
                    <button className='debug ButtonCard  flex items-center h-14 w-60 justify-center'>Eventos Creados</button>
                    <button className='debug ButtonCard  flex items-center h-14 w-60 justify-center'>Eventos a asistir</button>


                </div>
                <div className='debug w-full p-4 grid grid-cols-2 gap-4 justify-items-center'>
                </div>
            </div>


        </div>
    )
}

export default Perfil