'use client';

import {UserProfile} from '@/types/user';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import {TOKEN_KEY} from '../constants/key';

interface ProfileWidgetProps {
  profile: UserProfile;
}

export const ProfileWidget = ({profile}: ProfileWidgetProps) => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    router.push('/');
  };

  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="flex items-start gap-6">
        <div className="relative w-24 h-24">
          {profile.profileImage ? (
            <Image
              src={profile.profileImage}
              alt={profile.name}
              fill
              className="rounded-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-full" />
          )}
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{profile.nickname}</h2>
          <p className="text-gray-600 mt-1">{profile.email}</p>
          <div className="flex gap-2 mt-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
              프로필 수정
            </button>
            <button
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg"
              onClick={handleLogout}
            >
              로그아웃
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
