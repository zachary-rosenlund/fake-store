import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ProductTile from 'components/ProductTile';
import styles from '../styles/Home.module.css'
import { useSelector } from 'react-redux';
import { selectUser, login } from 'store/slices/app';
import { useDispatch } from 'react-redux';
import Header from 'components/Header';

export default function Home() {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  return (
    <div>
      <button onClick={async () => await dispatch(login('mor_2314', '83r5^_')) }>
        Login
      </button>
      {user?.token.toString()}
    </div>
  )
}
