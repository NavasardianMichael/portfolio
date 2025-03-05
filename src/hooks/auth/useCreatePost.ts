import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'
import { createPostThunk } from 'store/posts/thunk'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { PUBLIC_PAGES } from 'helpers/constants/pages'
import { POST_FORM_INITIAL_VALUES } from 'helpers/constants/post'
import { isRejectedAction } from 'helpers/functions/store'

export const useCreatePost = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return useCallback(
    async (values: typeof POST_FORM_INITIAL_VALUES) => {
      const res = await dispatch(
        createPostThunk({
          MainImage: values.primaryImage,
          Video: values.video,
          Images: values.secondaryImages,
          Description: values.description,
          Damaged: values.damaged,
          RunAndGo: values.runAndGo,
          UnderWarranty: values.underWarranty,
          Clearance: values.clearance,
          Year: values.year ?? -1,
          Vin: values.vin,
          Mileage: values.mileage ?? -1,
          PurchaseDate: values.purchaseDate,
          Price: values.price ?? -1,
          Name: values.contactInfoName,
          Email: values.contactInfoName,
          PhoneNumber: values.contactInfoPhoneNumber,
          LookupAddress: values.contactInfoLookupAddress,
          PriceUnit: values.priceUnit,
          AvailabilityId: values.availabilityId,
          BrandId: values.brandId,
          ModelId: values.modelId,
          CategoryId: values.categoryId,
          BodyTypeId: values.bodyTypeId,
          EngineId: values.engineId,
          CarDriveTypeId: values.carDriveTypeId,
          TransmissionId: values.transmissionId,
          ModificationId: values.modificationId,
          ColorId: values.colorId,
          DocumentTypeId: values.documentTypeId,
          OwnerNumberId: values.ownerNumberId,
        })
      )
      if (isRejectedAction(res)) return
      message.success('Post created Successfully!')
      navigate(PUBLIC_PAGES.home)
    },
    [dispatch, navigate]
  )
}
